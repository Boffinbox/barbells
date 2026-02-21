import { Stack } from 'react-bootstrap'
import { createFileRoute } from '@tanstack/react-router'
import { BPCCalc } from '../components/BPCCalc'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent()
{
    return (
        <div className='container'>
            <div className='scroll-container'>
                <Stack gap={2} as={'main'} className="col-sm-9 mx-auto px-4 py-2 vh-100" >
                    <div className='buffer mt-2' aria-hidden />
                    <Stack gap={2} as={"section"} className='justify-content-center'>
                        <header>
                            <h1 className='display-5 text-center fw-bold'>Barbell Plates Calculator</h1>
                        </header>
                        <div className='text-center'>
                            <i>Provide the weight plates you have, and get the weight combos you can set!</i>
                        </div>
                        <hr aria-hidden />
                        <div>
                            Want to move up a weight for your progressive overloading, but don't know what your next possible increment is with your current plates? Add your weight plate details below, and we will show you your options as you add them.
                        </div>
                        <div>
                            <BPCCalc />
                        </div>
                    </Stack>
                    <div className='buffer mb-2' aria-hidden />
                </Stack>
            </div>
        </div>
    )
}
