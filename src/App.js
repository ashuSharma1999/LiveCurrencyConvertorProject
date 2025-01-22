import React, { useCallback, useRef, useState } from "react";

const CenteredDropdownAndPasswordGenerator = () => {
  const [selectedOption, setSelectedOption] = useState("alphanumeric");
  const [passwordLength, setPasswordLength] = useState(8); // Default password length
  const [generatedPassword, setGeneratedPassword] = useState("");
  const inputRef=useRef(null);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePasswordLengthChange = (event) => {
    const value = Math.max(1, Math.min(20, Number(event.target.value))); // Restrict length between 1 and 20
    setPasswordLength(value);
  };

  const handleGeneratePassword=useCallback(()=>{
    let charset = "";
    if (selectedOption === "numeric") {
      charset = "0123456789";
    } else if (selectedOption === "alphanumeric") {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    } else if (selectedOption === "special-character") {
      charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    } else {
      alert("Please select a data type for password generation.");
      return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setGeneratedPassword(password);
  },[passwordLength,selectedOption])


  const handleCopy = () => {
    if (generatedPassword) {
      inputRef.current.select();
      window.navigator.clipboard.writeText(generatedPassword);
      alert("Copied to clipboard: " + generatedPassword);
    } else {
      alert("No password to copy. Please generate one first.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {/* Dropdown */}
      <label htmlFor="data-type" style={{ marginBottom: "10px" }}>
        Select Data Type:
      </label>
      <select
        id="data-type"
        value={selectedOption}
        onChange={handleDropdownChange}
        style={{ padding: "5px", marginBottom: "20px", width: "200px" }}
      >
        <option value="">-- Select --</option>
        <option value="numeric">Numeric</option>
        <option value="alphanumeric">AlphaNumeric</option>
        <option value="special-character">Special Character</option>
      </select>

      {/* Password Length Input */}
      <label htmlFor="password-length" style={{ marginBottom: "10px" }}>
        Enter Password Length:
      </label>
      <input
        id="password-length"
        type="number"
        value={passwordLength}
        onChange={handlePasswordLengthChange}
        style={{
          padding: "5px",
          width: "200px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        min="1"
        max="50"
      />

      {/* Generate Password */}
      <button
        onClick={handleGeneratePassword}
        style={{
          padding: "8px 15px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Generate Password
      </button>

      {/* Display Generated Password and Copy Button */}
      {generatedPassword && (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <input
            type="text"
            value={generatedPassword}
            readOnly
            ref={inputRef}
            style={{
              padding: "5px",
              width: "200px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleCopy}
            style={{
              padding: "8px 15px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Copy
          </button>
        </div>
      )}

    
    </div>
  );
};

export default CenteredDropdownAndPasswordGenerator;
