import React, { useState } from "react";

export const Pagination = ({
  totalItems = 100,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange = (page) => {}
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [page, setPage] = useState(currentPage);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", background: "#0f172a", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <button onClick={() => handlePageChange(1)} disabled={page === 1} style={{
        padding: "10px 15px",
        borderRadius: "10px",
        background: page === 1 ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
        color: "#fff",
        border: "none",
        cursor: page === 1 ? "not-allowed" : "pointer",
        marginRight: "5px"
      }}>First</button>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} style={{
        padding: "10px 15px",
        borderRadius: "10px",
        background: page === 1 ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
        color: "#fff",
        border: "none",
        cursor: page === 1 ? "not-allowed" : "pointer",
        marginRight: "5px"
      }}>Previous</button>
      <span style={{ color: "#fff", margin: "0 10px" }}>{page} / {totalPages}</span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} style={{
        padding: "10px 15px",
        borderRadius: "10px",
        background: page === totalPages ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
        color: "#fff",
        border: "none",
        cursor: page === totalPages ? "not-allowed" : "pointer",
        marginLeft: "5px"
      }}>Next</button>
      <button onClick={() => handlePageChange(totalPages)} disabled={page === totalPages} style={{
        padding: "10px 15px",
        borderRadius: "10px",
        background: page === totalPages ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
        color: "#fff",
        border: "none",
        cursor: page === totalPages ? "not-allowed" : "pointer",
        marginLeft: "5px"
      }}>Last</button>
    </div>
  );
};