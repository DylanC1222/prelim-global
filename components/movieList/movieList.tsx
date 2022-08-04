import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const MovieList = ({ results }: any) => {
  const [open, setOpen] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <>
      <div className="movie-container d-flex flex-row justify-content-center">
        <div className="movie-rank-cards">
          {Array.from({ length: 10 }).map((_, idx) => {
            return (
              <Collapse
                in={open[idx]}
                key={idx}
                dimension="width"
                style={{ transition: "0.3s ease-in-out" }}
              >
                <div className="movie-card">
                  <Card
                    className={"d-flex border-0 flex-row bg-dark text-white"}
                    style={{ width: "100%", borderRadius: "10px 0 0 10px" }}
                  >
                    <Card.Body
                      style={{
                        maxWidth: "200px",
                        minWidth: "200px",
                        height: "100px",
                      }}
                    >
                      <Card.Title style={{ fontSize: "150%" }}>
                        {results[idx].title}
                      </Card.Title>
                      <Card.Text>{results[idx].vote_average}</Card.Text>
                    </Card.Body>
                    <Card.Img
                      style={{
                        maxWidth: "800px",
                        minWidth: "800px",
                        borderRadius: "0",
                      }}
                      src={"http://localhost:3000/images/movie_placeholder.jpg"}
                    />
                  </Card>
                </div>
              </Collapse>
            );
          })}
        </div>
        <div className="movie-rank-buttons">
          <ButtonGroup vertical style={{ height: "450px" }}>
            {Array.from({ length: 10 }).map((_, idx) => {
              return (
                <Button
                  key={idx}
                  variant="dark"
                  style={{
                    borderRadius:
                      idx === 0 || idx === 9
                        ? idx === 0
                          ? "0 10px 0 0"
                          : "0 0 10px 0"
                        : "0",
                  }}
                  onClick={() => {
                    if (!open[idx]) {
                      setTimeout(() => {
                        setOpen(open.map((_, innerIdx) => innerIdx === idx));
                      }, 300);
                      setOpen([
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                      ]);
                    }
                  }}
                >
                  {idx + 1}
                </Button>
              );
            })}
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default MovieList;
