"use client";

import { BookOpen01, Cube01, HelpCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import {ExciteLogo} from "@/components/foundations/logo/excite-logo"
import { useClipboard } from "@/hooks/use-clipboard";

export const HomeScreen = () => {
    const clipboard = useClipboard();

    return (
        <div className="flex h-dvh flex-col">
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 md:px-8">
                <div className="relative flex size-64 items-center justify-center m-2">
                    <ExciteLogo />
                </div>
                <h1 className="max-w-3xl text-center text-display-xsm font-regular text-primary"> Premier Digital Product Innovation Company that Specializes in </h1>
                <p className="mt-2 max-w-xl text-center text-5xl font-bold leading-[60px] tracking-tight text-primary font-inter">
                    UIUX Research, Design & Software Engineering
                </p>

                <div className="mt-6 flex items-center gap-3">
                    <Button
                        href="https://www.untitledui.com/react/docs/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="link-color"
                        size="lg"
                        iconLeading={BookOpen01}
                    >
                        Docs
                    </Button>
                    <div className="h-px w-4 bg-brand-solid" />
                    
                    <Button
                        href="https://www.untitledui.com/react/resources/icons"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="link-color"
                        size="lg"
                        iconLeading={Cube01}
                    >
                        Icons
                    </Button>
                    <div className="h-px w-4 bg-brand-solid" />
                    <Button
                        href="https://github.com/untitleduico/react/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="link-color"
                        size="lg"
                        iconLeading={HelpCircle}
                    >
                        Help
                    </Button>
                </div>
            </div>
        </div>
    );
};
