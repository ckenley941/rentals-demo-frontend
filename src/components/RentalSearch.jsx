//In future could extend this class to show more information on the rental
import TextField from '@mui/material/TextField';

export default function RentalSearch({ pageLimitedChanged, pageOffsetChanged, textSearchChanged }) {
    return (
     <div>
         <TextField label="Page Limit" type="number" onChange={pageLimitedChanged} InputProps={{ inputProps: { min: 0 } }}/>
          <TextField label="Page Offset" type="number" onChange={pageOffsetChanged} InputProps={{ inputProps: { min: 0 } }}/>
          <TextField fullWidth label="Type to Search" variant="outlined" onChange={textSearchChanged} />
     </div>
    );
    }

    

