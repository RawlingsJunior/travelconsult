import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, CreditCard, Smartphone, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageTitle?: string;
    packagePrice?: number;
}

interface BookingData {
    startDate: Date | undefined;
    endDate: Date | undefined;
    adults: number;
    children: number;
    fullName: string;
    email: string;
    phone: string;
    nationality: string;
    specialRequests: string;
    paymentMethod: "card" | "mobile_money" | "";
}

const BookingModal = ({ isOpen, onClose, packageTitle = "Amazing Tour Package", packagePrice = 150 }: BookingModalProps) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<BookingData>({
        startDate: undefined,
        endDate: undefined,
        adults: 1,
        children: 0,
        fullName: "",
        email: "",
        phone: "",
        nationality: "",
        specialRequests: "",
        paymentMethod: "",
    });

    const totalAmount = (data.adults * packagePrice) + (data.children * (packagePrice * 0.5));

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const renderStep1 = () => (
        <div className="space-y-6 py-4">
            <div className="bg-tourigo-light p-6 rounded-xl space-y-4">
                <h3 className="font-bold text-xl text-tourigo-primary">{packageTitle}</h3>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price per Adult</span>
                    <span className="font-bold">${packagePrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price per Child</span>
                    <span className="font-bold">${packagePrice * 0.5}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-bold">5 Days / 4 Nights</span>
                </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
                Click "Next" to select your travel dates and travelers.
            </p>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-6 py-4">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label>Travel Dates</Label>
                    <div className="flex gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !data.startDate && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {data.startDate ? format(data.startDate, "PPP") : <span>Start Date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={data.startDate} onSelect={(date) => setData({ ...data, startDate: date })} initialFocus />
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !data.endDate && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {data.endDate ? format(data.endDate, "PPP") : <span>End Date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={data.endDate} onSelect={(date) => setData({ ...data, endDate: date })} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label>Adults</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                            <Input type="number" min={1} className="pl-9" value={data.adults} onChange={(e) => setData({ ...data, adults: parseInt(e.target.value) || 0 })} />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label>Children</Label>
                        <div className="relative">
                            <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                            <Input type="number" min={0} className="pl-9" value={data.children} onChange={(e) => setData({ ...data, children: parseInt(e.target.value) || 0 })} />
                        </div>
                    </div>
                </div>

                <div className="bg-tourigo-light p-4 rounded-lg flex justify-between items-center mt-4">
                    <span className="font-medium text-gray-700">Total Price</span>
                    <span className="text-2xl font-bold text-tourigo-secondary">${totalAmount}</span>
                </div>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-4 py-4">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label>Phone Number</Label>
                        <Input placeholder="+1 234 567 890" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                    </div>
                    <div className="grid gap-2">
                        <Label>Email Address</Label>
                        <Input placeholder="john@example.com" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label>Nationality</Label>
                    <Input placeholder="American" value={data.nationality} onChange={(e) => setData({ ...data, nationality: e.target.value })} />
                </div>
                <div className="grid gap-2">
                    <Label>Special Requests (Optional)</Label>
                    <Input placeholder="Dietary requirements, etc." value={data.specialRequests} onChange={(e) => setData({ ...data, specialRequests: e.target.value })} />
                </div>
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div className="space-y-6 py-4">
            <div className="grid gap-4">
                <button
                    onClick={() => setData({ ...data, paymentMethod: "card" })}
                    className={cn("flex items-center gap-4 p-4 rounded-xl border-2 transition-all", data.paymentMethod === "card" ? "border-tourigo-secondary bg-blue-50" : "border-gray-200 hover:border-gray-300")}
                >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-gray-900">Credit / Debit Card</h4>
                        <p className="text-sm text-gray-500">Pay securely with Visa or Mastercard</p>
                    </div>
                    {data.paymentMethod === "card" && <Check className="ml-auto w-6 h-6 text-tourigo-secondary" />}
                </button>

                <button
                    onClick={() => setData({ ...data, paymentMethod: "mobile_money" })}
                    className={cn("flex items-center gap-4 p-4 rounded-xl border-2 transition-all", data.paymentMethod === "mobile_money" ? "border-tourigo-secondary bg-blue-50" : "border-gray-200 hover:border-gray-300")}
                >
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-gray-900">Mobile Money</h4>
                        <p className="text-sm text-gray-500">MTN, Vodafone, AirtelTigo</p>
                    </div>
                    {data.paymentMethod === "mobile_money" && <Check className="ml-auto w-6 h-6 text-tourigo-secondary" />}
                </button>
            </div>
        </div>
    );

    const renderSuccess = () => (
        <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <Check className="w-10 h-10" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
                <p className="text-gray-500 mt-2">
                    Your booking reference is <span className="font-mono font-bold text-gray-900">TRV-{Math.floor(Math.random() * 100000)}</span>
                </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl max-w-xs mx-auto text-sm text-left space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-500">Amount Paid</span>
                    <span className="font-bold">${totalAmount}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-bold">{new Date().toLocaleDateString()}</span>
                </div>
            </div>
            <Button className="w-full bg-tourigo-secondary hover:bg-tourigo-secondary/90 text-white" onClick={onClose}>
                Download Receipt
            </Button>
        </div>
    );

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                {step < 5 && (
                    <DialogHeader>
                        <DialogTitle>
                            {step === 1 && "Select Package"}
                            {step === 2 && "Travel Details"}
                            {step === 3 && "Traveler Info"}
                            {step === 4 && "Payment Method"}
                        </DialogTitle>
                        <DialogDescription>
                            Step {step} of 4
                        </DialogDescription>
                    </DialogHeader>
                )}

                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}
                {step === 5 && renderSuccess()}

                {step < 5 && (
                    <DialogFooter className="flex justify-between sm:justify-between gap-4">
                        {step > 1 ? (
                            <Button variant="outline" onClick={handleBack}>Back</Button>
                        ) : (
                            <div /> // Spacer
                        )}
                        <Button
                            className="bg-tourigo-secondary hover:bg-tourigo-secondary/90 text-white"
                            onClick={step === 4 ? () => setStep(5) : handleNext}
                            disabled={
                                (step === 2 && (!data.startDate || !data.endDate)) ||
                                (step === 3 && (!data.fullName || !data.email || !data.phone)) ||
                                (step === 4 && !data.paymentMethod)
                            }
                        >
                            {step === 4 ? "Pay Now" : "Next"}
                        </Button>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
