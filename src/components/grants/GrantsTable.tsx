"use client";

import { Grant } from "@/types/grant";

export interface GrantsTableProps {
    grants: Grant[];
}

const GrantsTable = ({ grants }: GrantsTableProps) => {
    return (
        <div>
            {grants.map((grant) => {
                return (
                    grant.daf_name && <h1>{grant.daf_name}</h1>
                )
            })}
        </div>
    );
};

export default GrantsTable;