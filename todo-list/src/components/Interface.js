import React, { useState } from "react";

function Interface() {
  const [main1items, setmain1Items] = useState([{ id: Date.now(), text: "" }]);
  const [main2items, setmain2Items] = useState([{ id: Date.now(), text: "" }]);
  const [main3items, setmain3Items] = useState([{ id: Date.now(), text: "" }]);

  const addItems = () => {
    const newItem = { id: Date.now()+1, text: "" }; // Unique id using Date.now()
    setmain1Items([...main1items,newItem]);
  };

  const deleteItems = (id,setItems) => {
    const filteredItems = main1items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const deleteItems2 = (id,setItems) => {
    const filteredItems = main2items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const deleteItems3 = (id,setItems) => {
    const filteredItems = main3items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 parent-bg">
        <div className="w-33 h-100 text-center d-flex justify-content-center text-white child-bg">
          <div className="container mt-5">
            <h1 className="text-center">To Do</h1>

            {/* Flexbox container for checkbox and textarea */}
            <div className="main-1">
              {main1items.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-center mt-2">
                  <input type="checkbox" className="form-check-input me-3" />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter work"
                    aria-label="default input example"
                  />
                  <img src="delete-bin-6-line.png" alt="img" onClick={() => deleteItems(item.id,setmain1Items)} />
                </div>
              ))}
            </div>

            <div className="main-2">
              {main2items.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-center mt-2">
                  <input type="checkbox" className="form-check-input me-3" />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter work"
                    aria-label="default input example"
                  />
                  <img src="delete-bin-6-line.png" alt="img" onClick={() => deleteItems2(item.id,setmain2Items)} />
                </div>
              ))}
            </div>

            <div className="main-3">
              {main3items.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-center mt-2">
                  <input type="checkbox" className="form-check-input me-3" />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter work"
                    aria-label="default input example"
                  />
                  <img src="delete-bin-6-line.png" alt="img" onClick={() => deleteItems3(item.id,setmain3Items)} />
                </div>
              ))}
            </div>

            <button onClick={addItems}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interface;
