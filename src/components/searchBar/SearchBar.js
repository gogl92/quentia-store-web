import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, InputGroupAddon, Button } from "reactstrap";

const SearchBar = props => {
  return (
    <FormGroup>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Buscar Vestidos"
      />
    </FormGroup>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
