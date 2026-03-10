"use client";

import { useState } from "react";
import { signup } from "../api/authApi";
import { SignupRequest, USER_ROLE, UserRole } from "../types/authTypes";

export default function SignupForm() {
    const [form, setForm] = useState<SignupRequest>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: USER_ROLE.WORKER,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleRoleChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setForm((prev) => ({
        ...prev,
        role: e.target.value as UserRole,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await signup(form);

        alert("Signup success");
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
        />

        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
        />

        <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
        />

        <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
        />

        <select onChange={handleRoleChange}>
            <option value={USER_ROLE.WORKER}>
            Worker
            </option>

            <option value={USER_ROLE.EMPLOYER}>
            Employer
            </option>
        </select>

        <button type="submit">Signup</button>
        </form>
    );
}