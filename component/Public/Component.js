import { makeStyles } from '@material-ui/core/styles';
import { Select as MaterialSelect, InputLabel, FormControl, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    inputLabel: {
        fontSize:"17px",
        fontFamily:"微軟正黑體",
        display: "flex",
        flexDirection: "row-Reverse"
    },
    selectRequired:{
        marginLeft:"-7px"
    },
})

export function Select(props) {
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
        tabIndex=0
    } = props;

    let newProps = {
        ...props
    };
    delete newProps["helperText"];

    return (
        <FormControl
            {...formControlProps}
            size="small"
            fullWidth
            variant="outlined"
            disabled={disabled}
        >
            <InputLabel
                required={required}
                id="demo-simple-select-label"
                classes={{
                    root:classes.inputLabel,
                    required:classes.selectRequired
                }}
            >
                {label}
            </InputLabel>
            <MaterialSelect
                {...selectProps}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
