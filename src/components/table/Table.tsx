import React from 'react';
import '../../style/colors.css';
import './Table.css';

export interface TableProps<T> {
    headers: { label: string; key: string }[];
    data: T[];
    renderCell: (item: T, key: string) => React.ReactNode;
    rowKey: (item: T) => string;
    onRowClick?: (item: T) => void;
}

const Table = <T, >({headers, data, renderCell, rowKey, onRowClick}: TableProps<T>) => {
    return (
        <div className="table-container">
            <div className="table-header">
                {headers && headers.map((header) => (
                    <div key={header.key as string} className="table-cell">
                        {header.label}
                    </div>
                ))}
            </div>
            {data && data.map((item) => (
                <div className="table-row" key={rowKey(item)} onClick={() => onRowClick && onRowClick(item)}>
                    {headers.map((header) => (
                        <div key={header.key as string} className="table-cell">
                            {renderCell(item, header.key)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Table;