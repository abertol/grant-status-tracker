"use client";

import { Activity, Grant, Organization } from "@/types/grant";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";

export interface GrantsTableProps {
    data: { grants: Grant[], organizations: Organization[], activities: Activity[] };
}

const tableHeads = [
    'DAF Name',
    'Amount',
    'Organization',
    'Reviewed',
    'Status',
    'Modality',
    'Designation',
    'Created At',
    'Updated At'
] as string[];

const GrantsTable = ({ data }: GrantsTableProps) => {
    const { grants, organizations } = data;
    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    const fetchOrganizationById = (organizationId: number) => {
        return organizations.find((org) => org.id === organizationId) as Organization;
    }

    const handleRowExpand = (grantId: number) => {
        setExpandedRows((prev) => {
            if (prev.includes(grantId)) {
                return prev.filter(id => id !== grantId);
            }
            return [...prev, grantId];
        })
    }

    const renderExpandableRow = (grantId: number) => {
        if (expandedRows.includes(grantId)) {
            return (
                <KeyboardArrowDownOutlinedIcon />
            )
        }

        return <ChevronRightIcon />
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="grants table">
                <TableHead>
                    <TableRow>
                        {tableHeads.map((head, index) => <TableCell key={`${head}-${index}`}>{head}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {grants.map((grant) => {
                        return (
                            <TableRow key={grant.id}
                                sx={{ border: 0 }}>
                                <TableCell align="left" onClick={(() => { handleRowExpand(grant.id) })}>
                                    <Grid container alignItems="center" spacing={1}>
                                        {renderExpandableRow(grant.id)}
                                        {grant.daf_name}
                                    </Grid>
                                </TableCell>
                                <TableCell align="left">{grant.amount_in_cents}</TableCell>
                                <TableCell align="left">{fetchOrganizationById(grant.organization_id)?.name}</TableCell>
                                <TableCell align="left">{grant.is_reviewed}</TableCell>
                                <TableCell align="left">{grant.status}</TableCell>
                                <TableCell align="left">{grant.modality}</TableCell>
                                <TableCell align="left">{grant.designation}</TableCell>
                                <TableCell align="left">{grant.created_at}</TableCell>
                                <TableCell align="left">{grant.updated_at}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GrantsTable;