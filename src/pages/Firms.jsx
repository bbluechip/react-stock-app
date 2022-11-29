import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getFirms();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>
      <Button variant="contained" onClick={} >New Firm</Button>
      <FirmModal  open={open} setOpen={setOpen} />

      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {firms?.map((firm) => (
            <Grid item>
              <FirmCard key={firm.id} firm={firm} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
