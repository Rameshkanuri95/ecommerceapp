/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import { CircularProgress, makeStyles, Typography } from "@mui/material"

const useStyles = makeStyles((theme) => ({
  textContainer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  text: {
    verticalAlign: "super",
    color: theme.palette.secondary.main,
  },
}))

const Loading = ({ text = "Loading" }) => {
  const classes = useStyles()
  const [content, setContent] = useState(text)
  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}`
      })
    }, 300)
    return () => window.clearInterval(id)
  }, [text])

  return (
    <div className="container">
      <Typography variant="h5" className={classes.textContainer}>
        <CircularProgress />
        <span className={classes.text}>{content}</span>
      </Typography>
    </div>
  )
}

export default Loading
