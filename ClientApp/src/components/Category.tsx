import React, { useEffect, useState } from "react";
import axios from "axios";
import { Panel } from "@fluentui/react/lib/Panel";
import "../styles.css";
import { TextField } from "@fluentui/react";

interface Category {
  id: number;
  categoryName: string;
}

const CategoryComponent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editResult, setEditResult] = useState<Category>();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get<Category[]>(
      "https://localhost:7037/api/Category/"
    );
    setCategories(response.data);
  };

  const handleDelete = (id: number) => {
    fetch("https://localhost:7037/api/Category/" + id, {
      method: "DELETE",
    }).then(() => getCategories());
  };

  const handleUpdate = (id: number|undefined) => {
    fetch("https://localhost:7037/api/Category/" + id, {
      method: "PUT",
    }).then(() => getCategories());
  };

  const onRenderFooterContent = React.useCallback(
    () => (
      <div>
        <button onClick={() => closePanel()}>Save</button>
        <button onClick={() => closePanel()}>Cancel</button>
      </div>
    ),
    []
  );

  const openPanel = (id: number) => {
    setIsOpen(true);
    getCategoryById(id);
  };

  const closePanel = () => {
    setIsOpen(false);
    handleUpdate(editResult?.id);
  };

  const getCategoryById = async (id: number) => {
    const response = await axios.get<Category>(
      "https://localhost:7037/api/Category/" + id
    );
    setEditResult(response.data);
  };

  return (
    <>
      <table className="tableStyle">
        <thead>
          <tr>
            <th style={{ width: "50px" }}>ID</th>
            <th style={{ width: "200px" }}>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.categoryName}</td>
              <td>
                <button
                  className="btnEdit"
                  onClick={() => openPanel(category.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="btnDelete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ width: "365px", textAlign: "right" }}>
        <button className="btnInsert">New Category</button>
      </div>

      <Panel
        isOpen={isOpen}
        onDismiss={() => closePanel()}
        headerText="Edit Category"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
      >
        <div>
          <p>
          <TextField label="Id">{editResult?.id}</TextField>
          </p>
        </div>
        <div>
          <p>
            <TextField label="Name">{editResult?.categoryName}</TextField>

          </p>
        </div>
      </Panel>
    </>
  );
};

export default CategoryComponent;
