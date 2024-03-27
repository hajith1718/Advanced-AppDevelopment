package com.haaris.boathouse.enumerated;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {
    SUPERADMIN_READ("superadmin:read"),
    SUPERADMIN_CREATE("superadmin:create"),
    SUPERADMIN_UPDATE("superadmin:update"),
    SUPERADMIN_DELETE("superadmin:delete"),
    ADMIN_READ("admin:read"),
    ADMIN_CREATE("admin:create"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_DELETE("admin:delete"),
    USER_READ("user:read"),
    USER_CREATE("user:create"),
    USER_UPDATE("user:update"),
    USER_DELETE("user:delete");

    @Getter
    private final String permissions;
}
