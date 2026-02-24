import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface StepperProps {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
    info?: string;
}

export const Stepper: React.FC<StepperProps> = ({ label, value, min, max, onChange, info }) => {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-white">{label}</span>
                    {info && <span className="text-xs text-primary font-medium">{info}</span>}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => onChange(Math.max(min, value - 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 active:scale-90 transition-all"
                        disabled={value <= min}
                    >
                        <Minus size={20} />
                    </button>
                    <span className="text-xl font-bold w-6 text-center">{value}</span>
                    <button
                        onClick={() => onChange(Math.min(max, value + 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 active:scale-90 transition-all font-bold"
                        disabled={value >= max}
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};
