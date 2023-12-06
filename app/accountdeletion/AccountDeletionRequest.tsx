"use client";
import React, { useState } from "react";

const AccountDeletionRequest = () => {
  const [deletionRequested, setDeletionRequested] = useState(false);
  const [username, setUsername] = useState("");
  const [reason, setReason] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
    setIsUsernameValid(true); // Reset validation when the user types.
  };

  const handleReasonChange = (event: any) => {
    setReason(event.target.value);
  };

  const handleDeletionRequest = () => {
    // Validate that a username is provided before submitting the request.
    if (username.trim() === "") {
      setIsUsernameValid(false);
      return;
    }

    // You can add logic here to handle the deletion request, including sending
    // the username and reason to your server.

    // For now, we'll just simulate the request by updating the state.
    setDeletionRequested(true);
  };

  return (
    <div className="text-2xl">
      {deletionRequested ? (
        <p>
          Your account deletion request has been submitted. We will process it
          as soon as possible.
        </p>
      ) : (
        <div>
          <p>
            To request{" "}
            <a
              className="bont-bold text-sky-400 underline"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.arsis.parsamooz&pli=1"
            >
              Parsamooz
            </a>{" "}
            account deletion, please provide your username and reason, and then
            click the button below. Please note that this action is
            irreversible.
          </p>
          <label className="block mt-4">
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className={`block w-full px-4 py-2 border rounded ${
                !isUsernameValid ? "border-red-500" : ""
              }`}
            />
            {!isUsernameValid && (
              <span className="text-red-500">Username is required.</span>
            )}
          </label>
          <br />
          <label className="block mt-4">
            Reason for deletion:
            <textarea
              value={reason}
              onChange={handleReasonChange}
              className="block w-full px-4 py-2 border rounded"
            />
          </label>
          <br />
          <button
            onClick={handleDeletionRequest}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Request Account Deletion
          </button>
          <p className="mt-4">
            Before proceeding, review our{" "}
            <a
              href="https://pages.flycricket.io/parsamooz/privacy.html"
              target="_blank"
              className="text-blue-500"
            >
              privacy policy
            </a>{" "}
            for information on data deletion and retention.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccountDeletionRequest;
