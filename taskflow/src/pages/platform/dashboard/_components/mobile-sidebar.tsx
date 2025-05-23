import useMobileSidebar from "@/hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from './sidebar'
import { Menu } from "lucide-react";
import { useLocation } from 'react-router-dom';


export const MobileSidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    
    const [isMounted, setIsMounted] = useState(false);

    const { isOpen, onOpen, onClose } = useMobileSidebar();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (!isMounted) {
        return null;
    }


    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2"
                variant="ghost"
                size="sm"
            >
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="left" className="p-2 pt-10">
                    <Sidebar storageKey="t-sidebar-mobile-state" />
                </SheetContent>
            </Sheet>
        </>
    );
};