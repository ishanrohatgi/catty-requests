import './MeowButton.css';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import React from 'react';
function MeowButton(props){
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[300],
          '&:hover': {
            backgroundColor: alpha(pink[400], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[300],
        },
      }));


    return (
        <div>
            <div className='switch'> Meow: <PinkSwitch onChange={event=>props.setMeowSound(event.target.checked)}/></div>
        </div>
    )
}

export default React.memo(MeowButton) ;