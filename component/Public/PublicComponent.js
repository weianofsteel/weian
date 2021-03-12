import { makeStyles } from '@material-ui/core/styles';
import { Select as MaterialSelect, InputLabel, FormControl, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles({
    inputLabel: {
        fontSize:"1rem",
        fontFamily:"微軟正黑體",
        display: "flex",
        flexDirection: "row-Reverse"
    },
    selectRequired:{
        
    },

})

export function Select(props) {
    const classes = useStyles();
    const {
        onOpen,
        onClose,
        onChange,
        items,
        open,
        value,
        mode
    } = props;

    return (
        <FormControl>
            <MaterialSelect
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={onClose}
                onOpen={onOpen}
                value={value}
                onChange={onChange}
                disableUnderline
                autoFocus={false}
                renderValue={()=>{
                    return <TranslateIcon style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}/>
                }}
                style={{backgroundColor: 'transparent'}}
            >
                {items.map(function(item,index) {
                    return (
                        <MenuItem
                            {...item.props ?? null}
                            key={index}
                            value={item.value??""}
                            classes={{root:classes.input}}
                        >
                            {item.label??""}
                        </MenuItem>
                    )
                })}
            </MaterialSelect>
        </FormControl>            
    );
}

export function Select2(props) {
    const classes = useStyles();
    const {
        label,
        value,
        name,
        items,
        formControlProps,
        selectProps,
        required,
        disabled =false,
        tabIndex=0,
        mode
    } = props;

    let newProps = {
        ...props
    };
    delete newProps["helperText"];

    return (
        <Grid container>
            <Grid item xs={2} style={{marginTop:'1rem'}}>
                <TranslateIcon/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={9}>
            <FormControl
                {...formControlProps}
                size="small"
                fullWidth
                disabled={disabled}
            >
                <InputLabel
                    required={required}
                    id="demo-simple-select-label"
                    classes={{
                        root:classes.inputLabel,
                        required:classes.selectRequired
                    }}
                    style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                >
                    {label}
                </InputLabel>
                <MaterialSelect
                    {...selectProps}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                    disableUnderline
                    inputProps={{
                        name: name,
                        classes: {select: classes.input},
                    }}
                    SelectDisplayProps={{
                        tabIndex:tabIndex
                    }}
                    value={value===null?"":value}
                    label={label}
                    displayEmpty={true}
                    renderValue={selected => {
                        function checkEqual(a,b){
                            if (a === null || a===undefined){
                                a = "";
                            }

                            if (b === null || b ===undefined){
                                b = "";
                            }

                            if (typeof a === "number"){
                                a = a.toString();
                            }

                            if (typeof b === "number"){
                                b = b.toString();
                            }

                            return a == b;
                        }

                        let filters= items.filter(item=> checkEqual(item.value,selected)  )

                        return filters[0]?filters[0]["label"]:"";
                    }}
                    {...newProps}
                >
                    {items.map(function(item,index) {
                        return (
                            <MenuItem
                                {...item.props ?? null}
                                key={index}
                                value={item.value??""}
                                classes={{root:classes.input}}
                            >
                                {item.label??""}
                            </MenuItem>
                        )
                    })}
                </MaterialSelect>
            </FormControl>
            </Grid>
        </Grid>
    );
}

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    formControlProps: PropTypes.object,
    inputLabelProps: PropTypes.object,
    selectProps: PropTypes.object
};

Select2.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    formControlProps: PropTypes.object,
    inputLabelProps: PropTypes.object,
    selectProps: PropTypes.object
};
