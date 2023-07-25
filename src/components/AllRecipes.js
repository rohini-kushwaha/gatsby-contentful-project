import React from 'react';
import TagList from './TagList';
import RecipesList from './RecipesList';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
 const data = useStaticQuery(query)
 const recipes = data.allContentfulRecipe.nodes
//  console.log(recipes);

  return (
    <section className='recipes-container'>
      <TagList recipes={recipes}/>
      <RecipesList recipes={recipes}/>
    </section>
  );
}

export default AllRecipes;
