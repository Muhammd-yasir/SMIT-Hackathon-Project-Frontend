
"use client";

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Stack,
    MenuItem,
} from "@mui/material";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const fieldSx = {
    "& .MuiOutlinedInput-root": { borderRadius: 2.5, bgcolor: "#FFFFFF" },
};

export default function OrganizationSetupPage() {
    return (
        <Box>
            <DashboardHeader
                title="Organization Setup"
                description="Define the essential details and working preferences of your organization."
            />

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.75fr) minmax(0, 1.25fr)" }, gap: 3 }}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: 4, color: "#FFFFFF", background: "linear-gradient(145deg,#17468F,#2875D5)", alignSelf: "start" }}>
                    <Box sx={{ width: 52, height: 52, display: "grid", placeItems: "center", bgcolor: "rgba(255,255,255,.15)", borderRadius: 3, mb: 3 }}>
                        <ApartmentRoundedIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Typography fontSize={22} fontWeight={850} lineHeight={1.4}>
                        Build the foundation for better people operations.
                    </Typography>
                    <Typography fontSize={13} lineHeight={1.9} sx={{ mt: 1.5, color: "#DFEAFF" }}>
                        Keep your organization’s identity and workplace preferences in one clearly organized place.
                    </Typography>
                </Paper>

                <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3.5 }, borderRadius: 4, border: "1px solid #E5ECF5" }}>
                    <Typography fontWeight={850} fontSize={18} color="#183454">Organization details</Typography>
                    <Typography fontSize={13} color="#77869D" mt={0.6} mb={3}>
                        Basic information
                    </Typography>

                    <Box component="form" onSubmit={(e) => e.preventDefault()}>
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                            <TextField sx={fieldSx} label="Organization name" required fullWidth />
                            <TextField sx={fieldSx} select label="Industry" defaultValue="" required fullWidth>
                                {["Technology", "Education", "Healthcare", "Finance", "Retail", "Manufacturing", "Other"].map((item) => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                            </TextField>
                            <TextField sx={fieldSx} label="Organization email" type="email" required fullWidth />
                            <TextField sx={fieldSx} label="Contact number" fullWidth />
                            <TextField sx={fieldSx} label="Timezone" defaultValue="Asia/Karachi" required fullWidth />
                            <TextField sx={fieldSx} label="Website" type="url" fullWidth />
                            <TextField
                                label="Office address"
                                multiline
                                minRows={2}
                                sx={{ ...fieldSx, gridColumn: { sm: "1 / -1" } }}
                                fullWidth
                            />
                        </Box>

                        <Stack direction="row" justifyContent="flex-end" mt={3}>
                            <Button type="button" variant="contained" startIcon={<SaveRoundedIcon />} sx={{ px: 3, py: 1.2, borderRadius: 2.5, textTransform: "none", fontWeight: 750 }}>
                                Save details
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
