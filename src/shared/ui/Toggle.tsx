import React from 'react';

interface ToggleProps {
    label: string;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    description?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ label, enabled, onChange, description }) => {
    return (
        <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex flex-col">
                <span className="font-bold text-white">{label}</span>
                {description && <span className="text-xs text-white/50">{description}</span>}
            </div>
            <button
                type="button"
                onClick={() => onChange(!enabled)}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none px-1 ${enabled ? 'bg-primary' : 'bg-white/10'
                    }`}
            >
                <div
                    className={`h-4 w-4 rounded-full bg-white transition-all duration-300 shadow-sm ${enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                />
            </button>
        </div>
    );
};
