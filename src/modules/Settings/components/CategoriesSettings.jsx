import React from 'react';
import AddCategory from './AddCategory';

const CategoriesSettings = () => {
  return (
    <div className="catgories-settings">
      <AddCategory/>
      <div className="catgories-settings__manage-cetegories"></div>
    </div>
  );
}

export default CategoriesSettings;
