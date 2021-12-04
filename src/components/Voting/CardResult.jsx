import { Card, CardContent, styled, Typography } from "@mui/material";

const CardResultItem = styled(Card)(({ theme }) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2)
}));

const CardResult = (props) => {
    const {title} = props;
    return (
        <CardResultItem sx={{ maxWidth: 700 }}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
            </CardContent>
        </CardResultItem>
    );
}

export default CardResult;