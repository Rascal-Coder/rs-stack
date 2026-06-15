import { FileText, BarChart2, Lock, LogOut, UserSquare } from "lucide-react";

import { m } from "@rs-stack/i18n/messages";
import { Link } from "@rs-stack/i18n/tanstack-start/components/link";
import { Button } from "@rs-stack/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@rs-stack/ui/components/dropdown-menu";

export function UserDropdown() {
  const handleSignOut = async () => {
    console.log("sign out");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Open account menu" size="icon" variant="ghost">
          <UserSquare aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-sm min-w-fit">
        <DropdownMenuLabel className="flex items-start gap-3">Avatar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/dashboard">
              <BarChart2 aria-hidden="true" className="opacity-60" size={16} />
              <span>{m.user_dropdown__dashboard()}</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/privacy-policy">
              <Lock aria-hidden="true" className="opacity-60" size={16} />
              <span>{m.user_dropdown__privacy_policy()}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link to="/terms-of-service">
              <FileText aria-hidden="true" className="opacity-60" size={16} />
              <span>{m.user_dropdown__terms_of_service()}</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" variant="destructive" onClick={handleSignOut}>
          <LogOut aria-hidden="true" className="opacity-60" />
          <button onClick={handleSignOut}>{m.user_dropdown__logout()}</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
