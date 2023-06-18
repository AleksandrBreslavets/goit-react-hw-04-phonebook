import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled"
export const Filter = ({ onFilterChange, value }) => {
    return (
        <Label>Find contacts by name
          <Input
            value={value}
            onChange={onFilterChange}
            type="text"
            name="filter"
          />
        </Label>)
}
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
}