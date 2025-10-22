"use client";
import * as React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "../../button";
import { ThemeToggleButton, useThemeTransition } from "../theme-toggle-button";
import { Mode, useSettingsContext } from "@/contexts/settingsContext";
import Link from "next/link";

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 324 323"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g
        transform="translate(-100.000000,412.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3423 3498 c-343 -433 -649 -897 -1241 -1885 -83 -138 -158 -265
      -167 -282 l-16 -31 76 0 75 0 17 34 16 34 376 4 c438 5 451 7 532 88 89 89 84
      126 -59 442 -61 134 -138 305 -171 381 l-60 138 31 52 c122 200 536 813 685
      1014 46 61 83 114 83 117 0 3 -20 6 -44 6 l-44 0 -89 -112z m-623 -1405 c229
      -492 240 -524 189 -579 -52 -57 -65 -59 -431 -62 -186 -2 -338 0 -338 4 0 11
      121 219 288 494 85 140 164 270 174 288 11 17 23 32 28 32 4 0 45 -80 90 -177z"
        />
        <path
          d="M2208 3510 c-80 -24 -136 -107 -124 -184 4 -22 54 -162 112 -309 58
      -148 103 -275 100 -283 -3 -8 -52 -94 -109 -192 -57 -97 -151 -262 -209 -367
      -58 -104 -158 -284 -223 -400 -156 -280 -257 -466 -253 -470 2 -1 26 -4 53 -7
      l50 -5 99 181 c269 490 586 1039 744 1286 128 201 405 615 474 708 l39 52
      -363 -1 c-200 0 -375 -4 -390 -9z m548 -68 c8 -4 -60 -117 -200 -329 -116
      -177 -213 -324 -216 -327 -7 -6 -164 401 -181 468 -23 94 32 171 134 186 68
      10 449 12 463 2z"
        />
      </g>
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Types
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar01NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: "#home", label: "Home", active: false },
  { href: "#skill", label: "Skill" },
  { href: "#projects", label: "Project" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const NavbarHeader = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "#home",
      navigationLinks = defaultNavigationLinks,
      signInText = "Sign In",
      signInHref = "#signin",
      ctaText = "Get Started",
      ctaHref = "#get-started",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLElement>(null);
    const { theme, setTheme } = useTheme();
    const { settings, updateSettings } = useSettingsContext();
    const { startTransition } = useThemeTransition();

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    const handleThemeToggle = useCallback(() => {
      const newMode: Mode = theme === "dark" ? "light" : "dark";

      startTransition(() => {
        const updatedSettings = {
          ...settings,
          mode: newMode,
          theme: {
            ...settings.theme,
            styles: {
              light: settings.theme.styles?.light || {},
              dark: settings.theme.styles?.dark || {},
            },
          },
        };
        updateSettings(updatedSettings);
        setTheme(newMode);
      });
    }, [settings, updateSettings, setTheme, theme, startTransition]);
    if (!mounted) {
      return null;
    }

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex w-full items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground lg:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <HamburgerIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-full p2">
                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex-col w-full items-start gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <Link
                          href={link.href}
                          className={cn(
                            "flex w-full items-center rounded-md px-20 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline",
                            link.active
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/80",
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Main nav */}
            <div className="flex w-full justify-between items-center gap-6">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-2xl">{logo}</div>
                <span className="hidden font-bold text-xl sm:inline-block">
                  krittaphat
                </span>
              </button>
              {/* Navigation menu */}
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                          link.active
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/80 hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ThemeToggleButton
              theme={theme === "dark" ? "dark" : "light"}
              onClick={handleThemeToggle}
              variant="gif"
              url="https://res.cloudinary.com/dgfwfpxvg/image/upload/v1761114347/anime-chibi_cu303r.gif"
            />
          </div>
          {/* Right side */}
          <div className="hidden items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => {
                e.preventDefault();
                if (onSignInClick) onSignInClick();
              }}
            >
              {signInText}
            </Button>
            <Button
              size="sm"
              className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
              }}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

NavbarHeader.displayName = "NavbarHeader";

export { Logo, HamburgerIcon };
