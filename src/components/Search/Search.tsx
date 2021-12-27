/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNames, setPickedCountry } from '../../redux/countries/countriesSlice';
import { MenuItem, Typography } from '@mui/material';
import { red } from '@mui/material/colors';



function Search(): JSX.Element {
    const dispatch = useAppDispatch();
    const countriesState = useAppSelector((state) => state.countries);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setPickedCountry(event.target.value));
    };

    useEffect(() => {
        dispatch(fetchNames());
    }, []);

    return (
        <Container maxWidth="md" sx={{ padding: "10px" }}>
            <Paper
                sx={{
                    display: "flex",
                    borderRadius: 3,
                    backgroundColor: red[600],
                    padding: "5px",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Typography variant="h6" sx={{
                    fontWeight: 'bold', color: "#ffff",
                    width: "100%", textAlign: "center"
                }}
                >
                    Pick for country data
                </Typography>
                <Select
                    value={countriesState.pickedCountry ? countriesState.pickedCountry : ""}
                    onChange={handleChange}
                    sx={{ width: "60%", backgroundColor: "#ffff", textAlign: "center", borderRadius: 2, }}
                >
                    {countriesState.countryList.map(x => <MenuItem key={x.ISO2} value={x.Slug}>{x.Country}</MenuItem>)}
                </Select>
            </Paper>
        </Container >
    )
}
export default Search;