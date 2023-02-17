package com.guptha.exception;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ErrorDetails {

	private LocalDateTime timeStamp;
	private String message;
	private String details;

}
