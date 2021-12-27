/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Container, TextField } from '@mui/material'
import TableSummary from './TableSummary';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCountries } from '../../redux/summary/summarySlice';
import InputAdornment from '@mui/material/InputAdornment';
import FlagIcon from '@mui/icons-material/Flag';

function Summary(): JSX.Element {
    const [filterName, setFilterName] = useState("");
    const dispatch = useAppDispatch();
    const countries = useAppSelector((state) => state.summary.countries);

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterName(e.currentTarget.value);
    }

    return (
        <Container maxWidth="md" sx={{ padding: "10px" }}>
            <Box mb={1} sx={{ width: "100%" }} textAlign='center' >
                <TextField
                    sx={{ width: "50%", margin: "auto" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FlagIcon />
                            </InputAdornment>
                        )
                    }}
                    value={filterName}
                    onChange={onFilterChange}
                />
            </Box>
            <TableSummary countries={countries.filter(x => x.Country.toLowerCase().startsWith(filterName.toLowerCase()))} />
        </Container>
    )
}
export default Summary;