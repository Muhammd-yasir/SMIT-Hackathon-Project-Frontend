
"use client";

import { Box, Paper, Typography, TextField, Button, Stack, MenuItem, Grid } from "@mui/material";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

export default function LeavePage() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight={800} color="#173354">Leave management</Typography>
      <Typography color="text.secondary" fontSize={14} mt={.5} mb={3}>
        Submit leave requests and review their status.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4" }}>
            <Stack direction="row" alignItems="center" gap={1} mb={.5}>
              <EventAvailableRoundedIcon sx={{ color: "#245BC0" }} />
              <Typography fontWeight={800} color="#173354">Request leave</Typography>
            </Stack>
            <Typography fontSize={13} color="text.secondary" mb={3}>Provide the details for your leave request.</Typography>

            <Stack spacing={2}>
              <TextField select label="Leave type" defaultValue="" fullWidth>
                {["Annual leave", "Sick leave", "Personal leave", "Unpaid leave", "Other"].map((x) => <MenuItem key={x} value={x}>{x}</MenuItem>)}
              </TextField>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField type="date" label="Start date" InputLabelProps={{ shrink: true }} fullWidth /></Grid>
                <Grid item xs={12} sm={6}><TextField type="date" label="End date" InputLabelProps={{ shrink: true }} fullWidth /></Grid>
              </Grid>
              <TextField label="Reason for leave" multiline minRows={4} fullWidth placeholder="Briefly explain your request..." />
              <Button disabled variant="contained" startIcon={<SendRoundedIcon />} sx={{ alignSelf: "flex-start", borderRadius: 2, py: 1.2, textTransform: "none", fontWeight: 700 }}>
                Submit request
              </Button>
              <Typography fontSize={12} color="text.secondary">Submitting requests will be enabled after backend integration.</Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4", height: "100%" }}>
            <Typography fontWeight={800} color="#173354" mb={.5}>My leave requests</Typography>
            <Typography fontSize={13} color="text.secondary" mb={3}>Track submitted requests and decisions.</Typography>
            <ModuleEmptyState title="No requests to show" description="Your leave requests will be listed here once they are submitted and retrieved." />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
