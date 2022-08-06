import { HeaderContainer, SignUpButton, Logo, LoginLink } from "./style";
import { useNavigate } from "react-router-dom";
import { Menu, IconButton, MenuItem } from "@mui/material";
import { useState } from "react";
import ProfileIcon from "../../assets/profile.png";

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  }

  const handleLogout = () => {
    // TODO: remove token
    navigate('/', { replace: true });
  }

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/', { replace: true })}>jelp</Logo>
      {/* TODO replace with checking token */}
      {false
        ? 
          (
            <>
              <IconButton
                onClick={handleMenuOpen}
                sx={{ marginLeft: "auto", height: "3rem" }}
              >
                <img src={ProfileIcon} style={{ height: '3rem' }} alt="profile" />
              </IconButton>
              <Menu
                open={menuOpen}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => navigate('/profile', { replace: true })}>
                  Profile 
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  Logout 
                </MenuItem>
              </Menu>
            </>
          )
        : (
          <>
            <LoginLink href="/login">Login</LoginLink>
            <SignUpButton onClick={() => navigate('/signup', { replace: true })}>Sign up</SignUpButton>
          </>
        )
      }
    </HeaderContainer>
  )
};

export default Header;