import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfigButton() {
  return (
    <div>
      <Link to="/settings">
        <button data-testid="btn-settings" className="btn btn-dark m-2 fa fa-gear">
        </button>
      </Link>
    </div>
  );
}
