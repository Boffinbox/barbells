import { FormControl, FormHelperText, FormLabel, Input, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export function BPCCalc()
{
    const [weights, setWeights] = useState({ 6: 4, 7: 4 })
    // const data = Object.fromEntries((weights as any).entries());
    return (
        <>
            {/* {Object.entries(weights).map(([key, value]) => (
                <div>
                    Weight: {key}, Quantity {value}
                </div>
            ))} */}
            <Stack direction="row" spacing={2}>
                <FormControl>
                    <FormLabel>Weight</FormLabel>
                    <Input placeholder="kg, lb, etc" />
                    <FormHelperText>
                        <InfoOutlined />
                        Oops! something is wrong.
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Quantity (0 to 8)</FormLabel>
                    <Input
                        type="number"
                        defaultValue={2}
                        slotProps={{
                            input: {
                                min: 0,
                                max: 8,
                                step: 1,
                            },
                        }}
                    />
                    <FormHelperText>
                        <InfoOutlined />
                        Oops! something is wrong.
                    </FormHelperText>
                </FormControl>
            </Stack>
        </>
    )
}