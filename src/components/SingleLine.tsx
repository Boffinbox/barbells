import { Button, ButtonGroup, FormControl, FormLabel, Input, Stack } from "@mui/joy";
import { useState } from "react";

export function SingleLine()
{
    const [lineData, setLineData] = useState<{ weight: number, quantity: number }>({ weight: 0, quantity: 0 })
    const minWeight = 0
    const maxWeight = 100
    const minQuantity = 0
    const maxQuantity = 64

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>)
    {
        setLineData(currentData =>
        {
            return {
                ...currentData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    return (
        <>
            <Stack direction="row" spacing={2}>
                <FormControl>
                    <FormLabel>Weight ({minWeight} to {maxWeight})</FormLabel>
                    <Input
                        placeholder="kg, lb, etc"
                        type="number"
                        name="weight"
                        onChange={handleChange}
                        value={lineData.weight}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Quantity ({minQuantity} to {maxQuantity})</FormLabel>
                    <Input
                        type="number"
                        defaultValue={2}
                        slotProps={{
                            input: {
                                min: minQuantity,
                                max: maxQuantity,
                                step: 1,
                            },
                        }}
                        name="quantity"
                        onChange={handleChange}
                        value={lineData.quantity}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Add more?</FormLabel>
                    <ButtonGroup>
                        <Button>-</Button>
                        <Button>+</Button>
                    </ButtonGroup>
                </FormControl>
            </Stack>
        </>
    )
}