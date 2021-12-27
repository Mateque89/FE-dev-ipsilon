/* eslint-disable react-hooks/exhaustive-deps */
import { faExclamationTriangle, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, CircularProgress, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer,
} from 'recharts';
import { CountryByDate } from '../../react-app-env';
import { fetchCountry } from '../../redux/detailed/detailedSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

function Charts(): JSX.Element {
    const dispatch = useAppDispatch();
    const pickedCountry = useAppSelector((state) => state.countries.pickedCountry);
    const detailedState = useAppSelector((state => state.detailed));
    const days = detailedState.days;
    const fetchState = detailedState.loading;
    const isCountryPicked = detailedState.wasPicked;

    useEffect(() => {
        if (pickedCountry)
            dispatch(fetchCountry(pickedCountry!));
    }, [pickedCountry]);

    const _render = () => {
        if (!isCountryPicked) {
            return null;
        } else if (fetchState === "loading") {
            return <CircularProgress />
        } else if (fetchState === "failed") {
            return (
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                    <Typography variant="h4" >Problem with fetching data</Typography>
                </Box>)
        } else if (fetchState === "success" && days.length === 0) {
            return (
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <FontAwesomeIcon icon={faSadCry} size="3x" />
                    <Typography variant="h4" >This country doesn't report data</Typography>
                </Box>)
        } else {
            return (
                <Box>
                    {SingleChart("Confirmed", "blue", days)}
                    {SingleChart("Deaths", "red", days)}
                    {SingleChart("Recovered", "green", days)}
                </Box>);
        }
    };

    return (
        <Container maxWidth="md" sx={{ padding: "10px" }}>
            <Paper
                sx={{
                    borderRadius: 3,
                    padding: "10px",
                    background: "#F8F8FF"
                }}
            >
                {_render()}
            </Paper>
        </Container >
    );


}
export default Charts;


function SingleChart(dataKey: string, color: string, days: CountryByDate[]) {
    return <ResponsiveContainer width="100%" height={300}>
        <LineChart
            width={500}
            height={200}
            data={days}
            syncId="charts"
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke={color} dot={<svg />} />
        </LineChart>
    </ResponsiveContainer>;
}
