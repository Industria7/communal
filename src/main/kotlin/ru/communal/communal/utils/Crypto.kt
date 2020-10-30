package ru.communal.communal.utils

import java.security.MessageDigest

/**
 * @author osadchiy.ia
 */

fun sha256(input: String): String {
    return MessageDigest.getInstance("SHA-256").digest(input.toByteArray())
        .fold("", { str, it -> str + "%02x".format(it) })
}