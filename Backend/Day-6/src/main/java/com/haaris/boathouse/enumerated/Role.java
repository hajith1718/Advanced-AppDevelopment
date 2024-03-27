package com.haaris.boathouse.enumerated;

import static com.haaris.boathouse.enumerated.Permission.*;
import static java.util.stream.Collectors.toList;

import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    SUPERADMIN(Set.of(
            SUPERADMIN_READ,
            SUPERADMIN_CREATE,
            SUPERADMIN_UPDATE,
            SUPERADMIN_DELETE,
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE,
            USER_READ,
            USER_CREATE,
            USER_UPDATE,
            USER_DELETE)),
    ADMIN(Set.of(
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE,
            USER_READ,
            USER_CREATE,
            USER_UPDATE,
            USER_DELETE)),
    USER(Set.of(
            USER_READ,
            USER_CREATE,
            USER_UPDATE,
            USER_DELETE));

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermissions())).collect(toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
