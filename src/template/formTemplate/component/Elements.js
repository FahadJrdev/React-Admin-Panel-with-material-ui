/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, TextField, MenuItem} from '@mui/material';

const Element = ({ input, handleInputChange }) => {

    switch (input.field) {
        case 'input':
            return (<Grid xs={input.xs} sm={input.sm} item>
                        <TextField {...input} onChange = {handleInputChange} />
                    </Grid>
                    )
        case 'select':
            return (<Grid xs={input.xs} sm={input.sm} item>
                        <TextField {...input} select onChange = {handleInputChange}>
                            {
                                input.options?input.options.map((option,i)=>(
                                        <MenuItem key={i} value={option.optionLabel}>{option.optionLabel}</MenuItem>
                                    )):null
                            }
                        </TextField>
                    </Grid>
                    )
        default:
            return null;
    }


}

export default Element