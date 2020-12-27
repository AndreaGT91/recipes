import React, { useState, useEffect } from "react";
import { Container, Card, CardColumns } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import recipeList from "./recipes.json";

function App() {
  const [readyForRender, setReadyForRender] = useState(false); 

  useEffect(() => {
    recipeList.sort(function(a, b) {
      if (a.sortname < b.sortname) return -1
      else if (a.sortname > b.sortname) return 1
      else return 0;
    });
    setReadyForRender(true);
  }, []);

  return (
    <Container fluid className="d-block mx-auto text-center bg-light">
      {{readyForRender} ? (
        <>
          <h1 className="text-center p-4">Bentley Family Favorite Recipes</h1>
          <CardColumns>
            {recipeList.map((recipe, index) => (
              <Card key={index} className="p-3" bg="dark">
                <Card.Link href={`http://bentleytech.com/recipes/assets/${recipe.filename}`} 
                  target="_blank" rel="noopener noreferrer" style={{ color:"white" }}>
                  <Card.Title className="font-weight-bold">{recipe.title}</Card.Title>
                  <Card.Text className="font-weight-lighter">{recipe.source}</Card.Text>
                </Card.Link>
              </Card>
            ))}
          </CardColumns>
        </>
      ) : (
        <h1 className="text-center p-4">Bentley Family Favorite Recipes</h1>
      )}
    </Container>
  );
};

export default App;