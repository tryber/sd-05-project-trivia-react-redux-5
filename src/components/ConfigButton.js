import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfigButton() {
  return (
    <div>
      <Link to="/settings">
        <button data-testid="btn-settings">
          Settings
        </button>
      </Link>
    </div>
  );
}
