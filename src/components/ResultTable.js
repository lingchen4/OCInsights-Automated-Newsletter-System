import React, { useState, useEffect } from "react";

export const list = 10;

function ResultTable({ results, setSample, setShowSample, showSample }) {
  const [currData, setCurrData] = useState([]);
  const [page, setPage] = useState(0);

  const totalPage = results.length / list;
  const pages = [];

  const handlePageChange = (a) => {
    let updatedPage = page + a;
    if (updatedPage > -1 && updatedPage < totalPage) {
      setPage(updatedPage);
    }
  };

  const handleShowSample = (e) => {
    setSample(e);
    setShowSample(!showSample);
  };

  for (let i = 1; i < totalPage + 1; i++) {
    pages.push(i);
  }
  useEffect(() => {
    setCurrData(results.slice(page * list, page * list + list));
  }, [results, page]);


  return results.length > 0 ? (
    <div>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              {Object.keys(results[0])?.map((e) => (
                <th key={e}>{e}</th>
              ))}
              <th>Preview</th>
            </tr>
          </thead>

          <tbody>
            {currData.map((e) => (
              <tr key={e.name}>
                {Object.values(e).map((detail, i) => (
                  <td key={detail + i}>
                    {typeof detail === "object" || detail?.includes("http") ? (
                      <a
                        href={typeof detail === "object" ? detail.url : detail}
                        target="_blank"
                        rel="noreferrer"
                      >
                        link
                      </a>
                    ) : (
                      detail
                    )}
                  </td>
                ))}
                {e.job1 !== "" ? (
                  <td>
                    <button onClick={() => handleShowSample(e)}>Preview</button>
                  </td>
                ) : (
                  <td>
                    N/A
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container-pagination">
          <ul className="pagination">
            <li onClick={() => handlePageChange(-1)}>&#60; Pre</li>
            {pages.map((e) => (
              <li
                key={e + "i"}
                onClick={() => setPage(e - 1)}
                style={{ fontWeight: e - 1 === page ? "bold" : "normal" }}
              >
                {e}
              </li>
            ))}
            <li onClick={() => handlePageChange(1)}>Next &#62; </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    "DATA not avaliable"
  );
}

export default ResultTable;
