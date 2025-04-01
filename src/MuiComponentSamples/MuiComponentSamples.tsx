import { Box, Button, Grid, Typography } from "@mui/material"
import componentSamples from "./Samples"

const MuiComponentSamples = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {componentSamples.map(({ id, title, component, docs }) => (
        <div key={id} id={id}>
          <Grid container justifyContent="space-between" alignItems="center" padding="8px">
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              href={docs}
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </Button>
          </Grid>
          <Box
            sx={{
              mb: 10,
              width: 1,
              maxWidth: 1000,
              pl: 1,
              m: "auto",
            }}
          >
            {component}
          </Box>
        </div>
      ))}
    </Box>
  )
}

export default MuiComponentSamples
