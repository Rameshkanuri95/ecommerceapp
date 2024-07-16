/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/material"
import GridItem from "./GridItem"

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
  },
}))

const ProductSuggestions = ({ products }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Grid key={product.id} container item xs={4} spacing={1}>
          <GridItem product={product} />
        </Grid>
      ))}
    </div>
  )
}

export default ProductSuggestions
