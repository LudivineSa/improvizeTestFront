import {Box, Button, InputLabel, TextField, Typography} from '@mui/material';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import twoFlowers from '../../assets/images/two-flowers.svg'
import pinkFlower from '../../assets/images/pink-flower-in-pot.svg'
import yellowPlant from '../../assets/images/yellow-plant.svg'

import './formlogin.css'
import { useNavigate } from 'react-router-dom';

interface Form {
    id: string;
    password: string;
}

export const FormLogin = () => {

    const validationSchema = yup.object({
        id: yup.string().required("L'identifiant est requis"),
        password: yup.string().required("Le mot de passe est requis")
      });

    const { register , handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const navigate = useNavigate();
    
    const submit = () => {
        navigate('/')
    }

    return (
        <Box sx={{width: {xs: '90%', lg:"80%"}}}>
            <form onSubmit={handleSubmit(submit)}>
                <InputLabel>Identifiant</InputLabel>
                <TextField  sx={{width: '100%'}} {...register("id")} type="text" placeholder="Nom d'utilisateur" error={Boolean(errors.id)} helperText={Boolean(errors.id) && errors.id?.message as string} />
                <InputLabel>Mot de passe</InputLabel>
                <TextField  sx={{ width: '100%'}} {...register("password")} type="password" placeholder="Mot de passe" error={Boolean(errors.password)} helperText={Boolean(errors.password) && errors.password?.message as string}/>
                <Box>
                    <Typography sx={{cursor: "pointer", textAlign: 'right', color: 'primary.main', fontSize: '0.8rem', mt: '0.5rem', '&:hover': {textDecoration: "underline"}}} >Mot de passe oublié ?</Typography>
                </Box>
                <Box mt="2.5rem" width="100%">
                    <Box display="flex" justifyContent="center" alignItems="baseline" sx={{mb: "-0.2rem"}}>
                        <img src={twoFlowers} alt="two flowers" className="smallPlant" />
                        <img src={yellowPlant} alt="yellow plant" className="bigPlant" />
                        <img src={pinkFlower} alt="pink flower" className="smallPlant" />
                    </Box>
                    <Button type="submit" sx={{mt:"0"}} >Se connecter</Button>
                </Box>
            </form>
        </Box>
    )
}