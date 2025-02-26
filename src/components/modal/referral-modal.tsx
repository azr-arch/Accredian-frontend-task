import { useEffect, useState } from "react";
import { z } from "zod";
import { User, X } from "lucide-react";

// Custom function to validate names
const nameRegex = /^[A-Za-z\s]+$/;
const validateName = (name: string) => {
    return nameRegex.test(name);
};

const referralSchema = z.object({
    referrerName: z
        .string()
        .min(3, "Name must be at least 3 characters")
        .refine((name) => validateName(name), {
            message: "Name must only contain letters and spaces",
        }),
    referrerEmail: z.string().email("Invalid email address"),
    candidateName: z
        .string()
        .min(3, "Name must be at least 3 characters")
        .refine((name) => validateName(name), {
            message: "Name must only contain letters and spaces",
        }),
    candidateEmail: z.string().email("Invalid email address"),
    program: z.string().min(1, "Please select a program"),
});

export const ReferralModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            referralSchema.parse(data);

            // If validation passes, submit the form data
            const res = await fetch("http://localhost:8080/api/referrals", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const resData = await res.json();
            console.log({ resData });

            onClose();
            setFormErrors({});
        } catch (error) {
            // if validation fails
            if (error instanceof z.ZodError) {
                const errors: { [key: string]: string } = {};
                error.errors.forEach((err) => {
                    if (err.path) {
                        errors[err.path[0]] = err.message;
                    }
                });
                setFormErrors(errors);
                return;
            }

            console.log(error);
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-x-4">
                            <User className="w-6 h-6" />
                            <h3 className="text-2xl font-bold">Refer a Friend</h3>
                        </div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="referrerName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="referrerName"
                                name="referrerName"
                                className="mt-1 block w-full rounded-md border-gray-300 border h-9 px-3 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                required
                            />
                            {formErrors.referrerName && (
                                <p className="mt-1 text-sm text-red-600">
                                    {formErrors.referrerName}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="referrerEmail"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="referrerEmail"
                                name="referrerEmail"
                                className="mt-1 block w-full rounded-md border-gray-300 border h-9 px-3 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                required
                            />
                            {formErrors.referrerEmail && (
                                <p className="mt-1 text-sm text-red-600">
                                    {formErrors.referrerEmail}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="candidateName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Friend's Name
                            </label>
                            <input
                                type="text"
                                id="candidateName"
                                name="candidateName"
                                className="mt-1 block w-full rounded-md border-gray-300 border h-9 px-3 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                required
                            />
                            {formErrors.candidateName && (
                                <p className="mt-1 text-sm text-red-600">
                                    {formErrors.candidateName}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="candidateEmail"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Friend's Email
                            </label>
                            <input
                                type="email"
                                id="candidateEmail"
                                name="candidateEmail"
                                className="mt-1 block w-full rounded-md border-gray-300 border h-9 px-3 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                required
                            />
                            {formErrors.candidateEmail && (
                                <p className="mt-1 text-sm text-red-600">
                                    {formErrors.candidateEmail}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="program"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Program
                            </label>
                            <select
                                id="program"
                                name="program"
                                className="mt-1 block w-full rounded-md border-gray-300 border h-9 px-3 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                required
                            >
                                <option value="">Select a program</option>
                                <option value="pm">Product Management</option>
                                <option value="ba">Business Analytics</option>
                                <option value="dt">Digital Transformation</option>
                            </select>
                            {formErrors.program && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.program}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg 
            transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                        >
                            Submit Referral
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
