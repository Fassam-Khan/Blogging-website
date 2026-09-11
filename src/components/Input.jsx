import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({label, type, handler, name}) {
  return (
  
      <TextField type={type} onChange={(e)=> handler(e)} name={name} id="outlined-basic" label={label} sx={{
        marginBottom: "14px",
        width: "100%",
        paddingY:"0px",
      }} variant="outlined"  />
  );
}
