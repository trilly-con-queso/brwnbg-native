import React from 'react';
import { useState } from 'react';

const Ingredient = ({ item, amount }) => {

  return (
<li className="list-group-item">
  <input className="form-check-input me-1" type="checkbox" value='' id="firstCheckbox" />
  <label className="form-check-label" htmlFor="firstCheckbox">
  {`${item} || ${amount}`}
  </label>
</li>
)
  }

export default Ingredient;