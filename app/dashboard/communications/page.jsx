
"use client";

import { Box, Paper, Typography, Stack, TextField, Button, MenuItem, Grid } from "@mui/material";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ModuleEmptyState from "@/components/dashboard/ModuleEmptyState";

export default function CommunicationsPage() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight={800} color="#173354">Communications</Typography>
      <Typography color="text.secondary" fontSize={14} mt={.5} mb={3}>
        Prepare announcements and share updates with your organization.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4" }}>
            <Stack direction="row" alignItems="center" gap={1} mb={.5}>
              <CampaignRoundedIcon sx={{ color: "#245BC0" }} />
              <Typography fontWeight={800} color="#173354">Create announcement</Typography>
            </Stack>
            <Typography color="text.secondary" fontSize={13} mb={3}>
              Draft an update for the intended audience.
            </Typography>

            <Stack spacing={2}>
              <TextField label="Announcement title" fullWidth placeholder="Enter a clear title" />
              <TextField select label="Audience" defaultValue="" fullWidth>
                {["Everyone", "HR team", "Managers", "Employees"].map((x) => (
                  <MenuItem key={x} value={x}>{x}</MenuItem>
                ))}
              </TextField>
              <TextField label="Message" fullWidth multiline minRows={5} placeholder="Write your announcement..." />
              <Button disabled variant="contained" startIcon={<SendRoundedIcon />}
                sx={{ alignSelf: "flex-start", borderRadius: 2, py: 1.2, textTransform: "none", fontWeight: 700 }}>
                Publish announcement
              </Button>
              <Typography fontSize={12} color="text.secondary">
                Publishing will be enabled when communications are connected to the backend.
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: "1px solid #E5EBF4", height: "100%" }}>
            <Typography fontWeight={800} color="#173354" mb={.5}>Announcements</Typography>
            <Typography fontSize={13} color="text.secondary" mb={3}>
              Published organization updates will be listed here.
            </Typography>
            <ModuleEmptyState icon={CampaignRoundedIcon} title="Nothing published yet" description="Once announcements are saved, this space will show the title, audience, and publication details." />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
