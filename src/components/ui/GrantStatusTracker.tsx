"use client";

import { Grid, Typography } from "@mui/material";
import GrantsTable from "../grants/GrantsTable";
import data from "../../../db.js";
import { Grant } from "@/types/grant";

export default function GrantStatusTracker() {
    return (
        <Grid container spacing={2} my={2} mx={2} sx={{ backgroundColor: '#f4f5f7', width: '100%', height: 'auto' }}>
            <Grid size={12}>
                <Typography variant="h4" sx={(theme) => ({
                    color: theme.palette.text.primary,
                    fontWeight: theme.typography.fontWeightBold,
                    fontFamily: theme.typography.fontFamily,
                })}>
                    Grant Status Tracker

                    <GrantsTable grants={data.grants as Grant[]} />
                </Typography>
            </Grid>
        </Grid>
    );
}